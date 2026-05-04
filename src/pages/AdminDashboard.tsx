import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { OperationType, handleFirestoreError } from '../lib/error';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newExcerpt, setNewExcerpt] = useState('');

  useEffect(() => {
    if (!user) return;
    
    // Test the connection as instructed
    const path = 'blog_posts';
    const unsubscribe = onSnapshot(collection(db, path), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) return <div>Đang tải...</div>;
  if (!user) return <Navigate to="/admin/login" />;

  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newExcerpt) return;

    try {
      await addDoc(collection(db, 'blog_posts'), {
        title: newTitle,
        excerpt: newExcerpt,
        content: newExcerpt,
        date: new Date().toLocaleDateString('vi-VN'),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        authorId: user.uid
      });
      setNewTitle('');
      setNewExcerpt('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'blog_posts');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'blog_posts', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `blog_posts/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-brand-blue">Admin Dashboard</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Thêm Bài Viết Mới</h2>
          <form onSubmit={handleAddPost} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tiêu đề</label>
              <input 
                type="text" 
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nhập tiêu đề"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Trích dẫn (Excerpt)</label>
              <input 
                type="text" 
                value={newExcerpt}
                onChange={e => setNewExcerpt(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nhập trích dẫn"
              />
            </div>
            <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded font-bold">
              Thêm bài viết
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Danh Sách Bài Viết</h2>
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="border p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.excerpt}</p>
                </div>
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Xóa
                </button>
              </div>
            ))}
            {posts.length === 0 && <p className="text-gray-500">Chưa có bài viết nào.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
