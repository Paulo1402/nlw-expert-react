import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-6 max-w-6xl my-12 space-y-6 flex flex-col">
      <img className="max-w-44" src={logo} alt="Logo nlw-expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-1xl font-semibold tracking-tighter outline-none placeholder:text-slate-500 min-[300px]:text-2xl min-[530px]:text-3xl"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 gap-6 auto-rows-[250px] min-[530px]:grid-cols-3 md">
        <NewNoteCard />

        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus, harum, rem adipisci perferendis dolorem maiores doloremque tempore veritatis dolores veniam consequuntur, voluptas inventore asperiores labore fugit consequatur explicabo ducimus!",
          }}
        />
      </div>
    </div>
  );
}
