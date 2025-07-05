import { useLocation, useNavigate } from 'react-router';
import { useGetBookByIdQuery } from '../redux/api/baseApi';
import { BookOpen, Calendar, Edit, Hash, Split, Users } from 'lucide-react';
import Loading from '../components/Loading';

const BookDetails = () => {
    const urldata = useLocation();
    const id = urldata.pathname.split('/')[2];
    const { data, isError, isLoading } = useGetBookByIdQuery(id);
    const book = data?.data;
    const navigate = useNavigate();
    console.log(book);

    const handleEdit = (id: string) => {
        navigate(`/edit-book/${id}`);
    };

    const handleBorrow = (id: string) => {
        navigate(`/borrow/${id}`);
    };


    if (isLoading) return <Loading />
    if (isError) return <p className='text-red-400 text-3xl'>book load failed</p>

    return (
        <div className="min-h-screen space-y-6 pt-5">

            <div className="flex gap-3">
                <button onClick={()=> handleEdit(book?._id)} className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                </button>

                <button onClick={()=> handleBorrow(book?._id)} className="flex items-center justify-center px-4 py-2 border border-green-300 rounded-lg text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                    <Split className="w-4 h-4 mr-2" />
                    Borrow
                </button>
            </div>


            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <div className=" overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Book Cover */}

                        {/* Book Information */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Title and Author */}
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{book?.title}</h1>
                                <p className="text-xl text-gray-600 mb-4">by {book?.author}</p>

                                {/* Availability Status */}
                                <div className="inline-flex items-center">
                                    <span
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${book?.available ? "bg-green-500" : "bg-red-500"}`}
                                    >
                                        availability
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
                                <p className="text-gray-700 leading-relaxed">{book?.description}</p>
                            </div>

                            {/* Book Details */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Book Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Hash className="w-5 h-5 text-gray-400 mr-3" />
                                            <div>
                                                <span className="text-sm text-gray-600">ISBN</span>
                                                <p className="font-mono text-sm">{book?.isbn}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                                            <div>
                                                <span className="text-sm text-gray-600">Published</span>
                                                <p className="text-sm">{book?.createdAt}</p>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
                                            <div>
                                                <span className="text-sm text-gray-600">Copies</span>
                                                <p className="text-sm">{book?.copies}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Users className="w-5 h-5 text-gray-400 mr-3" />
                                            <div>
                                                <span className="text-sm text-gray-600">Genre</span>
                                                <p className="text-sm">{book?.genre}</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;