

import ChatSidebar from "@/app/components/dashboard/message/ChatSidebar";

const layout = ({ children }) => {
  
  return (
    <div>
      <div className="">
        <div className="bg-black h-full rounded-2xl ">
          <div className=" bg-black h-full p-4 rounded-lg  ">
            <div className="bg-[#404141] p-4 rounded-lg h-full text-white">
              <h3>Chat with Alll</h3>
              <br />

              <div className="flex items-start justify-start gap-8 mb-4">
                <h3 className="text-[#00A2C1] border-b-2 border-[#DD1122] cursor-pointer">
                  All Message
                </h3>{" "}
                <h3 className="cursor-pointer ">Unread</h3>
              </div>
              <div className="lg:flex md:flex w-full items-start justify-between gap-4 ">
              <ChatSidebar />

        {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
