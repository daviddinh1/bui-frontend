import Button from "./button";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around items-center p-3">
        <div className="text-slate-700 text-xl font-bold">BUI CAPITAL</div>
        <Button href="/login">INVESTOR LOGIN</Button>
      </div>
    </>
  );
}
