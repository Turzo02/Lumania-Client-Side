import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Head of Design',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ben Carter',
    role: 'Lead Artisan',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Chloe Evans',
    role: 'Director of Curation',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
];

const MeetTheTeam = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">Meet the Curators</h2>
          <p className="mt-4 text-lg text-zinc-400">
            The passionate minds behind our collection.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <div className="mx-auto h-24 w-24 rounded-full overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-200">{member.name}</h3>
              <p className="text-sm text-lime-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

