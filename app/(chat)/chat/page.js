import ChatArea from "@/components/chat/ChatArea";
import Sidebar from "@/components/chat/ChatSidebar";

export default function HomePage() {
    return (
        <main className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 bg-gradient-to-b from-[#0b0c10] to-[#0a0a0f] text-white px-6">
                <ChatArea />
            </div>
        </main>
    );
}
