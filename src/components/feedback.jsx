import { useState } from 'react';
import { supabase } from '../lib/supabase';

const UmpanBalik = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setStatus('');

        try {
            const { error } = await supabase
                .from('feedback')
                .insert({
                    username: username.trim(),
                    email: email.trim(),
                    message: message.trim(),
                });

            if (error) {
                console.error('Gagal mengirim feedback:', error);
                setStatus('Feedback gagal dikirim. Coba lagi, ya.');
                return;
            }

            setStatus('Thank you! Feedback kamu sudah terkirim');
            setUsername('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            setStatus('Terjadi kesalahan koneksi. Coba lagi, ya.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Container-Feedback flex justify-center items-center w-full pb-8 md:pb-16 mb-8 text-gray-800 text-xl">
            <div className="content-feedback flex flex-col w-11/12 md:w-10/12">
                <div className="h-1 w-full bg-gray-300 rounded-full"></div>
                <h2 className="py-2">
                    Kamu ada masukan buat website ini? Atau mau ngontak? Bisa langsung diisi aja
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col py-2 gap-4"
                >
                    <div className="form-atas grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-nama flex flex-col gap-1">
                            <label htmlFor="nama">Nama</label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder="Tulis nama kamu di sini..."
                                className="w-full rounded-xl p-2 border border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                maxLength={80}
                                required
                            />
                        </div>

                        <div className="form-email flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Tulis email kamu di sini..."
                                className="w-full rounded-xl p-2 border border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                maxLength={254}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-utama flex flex-col gap-1">
                        <label htmlFor="saran">Saran yang mau ditambahin:</label>
                        <textarea
                            id="saran"
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            className="w-full rounded-xl p-2 border border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                            placeholder="Tulis saranmu di sini..."
                            rows={4}
                            maxLength={3000}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="my-2 bg-blue-500 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 px-4 rounded-xl"
                    >
                        {loading ? 'Mengirim...' : 'Kirim Saran'}
                    </button>

                    {status && (
                        <p
                            role="status"
                            aria-live="polite"
                            className="text-md"
                        >
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default UmpanBalik;