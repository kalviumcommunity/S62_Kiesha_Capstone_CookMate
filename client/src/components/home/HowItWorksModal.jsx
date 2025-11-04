import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import HowItWorks from './HowItWorks';

export default function HowItWorksModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-5xl bg-white rounded-lg overflow-y-auto max-h-[90vh] shadow-lg">
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="bg-[#5F6F52] hover:bg-[#A9B388] text-white hover:text-black p-2 rounded-full transition">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="px-6 pb-6">
            <HowItWorks />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
