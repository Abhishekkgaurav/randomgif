import Random from './Random'
import Tag from './Tag'
export default function App() {
  return (
    <div className='background min-h-[100vh] w-full flex flex-col items-center justify-between gap-10 border-hidden'>
    <h1 className='text-2xl font-bold uppercase underline bg-white w-10/12 rounded-xl px-4 py-2 mt-3 text-center'>Random Gif</h1>
    <Random/>
    <Tag/>
    </div>
  );
}
