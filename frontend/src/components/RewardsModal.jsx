import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const RewardsModal = ({ isOpen, onClose, reward }) => {
  if (!reward) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-40" aria-hidden="true" />
      <div className="bg-white rounded-xl p-6 w-full max-w-md z-50 shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-600">
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-indigo-700">{reward.title}</h2>
        <p className="text-gray-700">{reward.description}</p>

        {reward.unlocked ? (
          <span className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
            ✅ Unlocked
          </span>
        ) : (
          <span className="mt-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
            🔒 Locked — Complete {reward.tasksToUnlock} more tasks
          </span>
        )}
      </div>
    </Dialog>
  );
};

export default RewardsModal;
