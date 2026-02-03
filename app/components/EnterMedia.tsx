'use client';
import React from 'react';

export default function EnterMedia({ onEnter }: { onEnter: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-white text-3xl mb-6">Enter Media URL or Upload File</h1>
            <input
                type="text"
                placeholder="Enter media URL"
                className="mb-4 p-2 rounded w-80"
            />
            <input
                type="file"
                className="mb-4"
            />
            <button
                onClick={onEnter}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Enter
            </button>
        </div>
    );
}