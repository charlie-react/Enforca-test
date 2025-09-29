import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    // helper to generate page numbers
    const getPageNumbers = () => {
        const pages = [];

        // Always include first page
        if (currentPage > 3) {
            pages.push(1);
            if (currentPage > 4) pages.push("...");
        }

        // Pages around current page
        for (
            let i = Math.max(1, currentPage - 2);
            i <= Math.min(totalPages, currentPage + 2);
            i++
        ) {
            if (!pages.includes(i)) {
                pages.push(i);
            }
        }

        // Always include last page
        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) pages.push("...");
            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    };


    return (
        <div className="flex justify-center gap-2 mt-4">
            {/* Prev button */}
            <div className="flex gap-1.5 cursor-pointer text-teal-800 font-semibold">
                <ArrowLeft size={20} />
                <p
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev 15
                </p>
            </div>

            {/* Dynamic page numbers */}
            {getPageNumbers().map((page, index) =>
                page === "..." ? (
                    <span  key={`dots-${index}`}  className="px-3 py-1">
                        ...
                    </span>
                ) : (
                    <button
                        key={`page-${page}`}
                        onClick={() => setCurrentPage(page)}
                        className={`px-1 py-1 cursor-pointer font-semibold ${currentPage === page ? " text-green-500" : "text-teal-800"
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next button */}
            <div className="flex gap-1.5 cursor-pointer  text-teal-800 font-semibold">
                <p
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next 15
                </p>
                <ArrowRight size={20} />
            </div>
        </div>
    );
}
