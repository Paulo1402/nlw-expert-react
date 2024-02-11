import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Logo nlw-expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard
          date="Há dois dias"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus, harum, rem adipisci perferendis dolorem maiores doloremque tempore veritatis dolores veniam consequuntur, voluptas inventore asperiores labore fugit consequatur explicabo ducimus!"
        />
        <NoteCard
          date="Há dois dias"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus, harum, rem adipisci perferendis dolorem maiores doloremque tempore veritatis dolores veniam consequuntur, voluptas inventore asperiores labore fugit consequatur explicabo ducimus!"
        />
        <NoteCard
          date="Há quatro dias"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus, harum, rem adipisci perferendis dolorem maiores doloremque tempore veritatis dolores veniam consequuntur, voluptas inventore asperiores labore fugit consequatur explicabo ducimus!"
        />
      </div>
    </div>
  );
}
