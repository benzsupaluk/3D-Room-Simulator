import { cn } from "@/lib/utils";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 -ml-2 h-8 w-4 text-primary-600">
        <div className="absolute z-10 -ml-2 h-8 w-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
          >
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
          </svg>
        </div>
        <div className="absolute -rotate-90 top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200"></div>
        <div className="absolute rotate-90 top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200"></div>
      </div>
    </div>
  );
};

export default Spinner;
