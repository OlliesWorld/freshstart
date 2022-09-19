export default function layout({children}: any) {
    return  (
         <div class="p-4 mx-auto max-w-screen-md">
            <nav class="p-8 flex justify-center space-x-1.5 bg-blue-700 text-green-300 uppercase font-bold">
                <a class="w-24" href="/">Home</a>
                <a class="w-24" href="about">About</a>
                <a class="w-24" href="user/github">Search</a>
            </nav>
            {children}
            <footer class=" mt-24 flex justify-center items-center">
                <div class="text-center">
                <img
                    src="/logo.svg"
                    class="w-24 h-24"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <a href="https://fresh.deno.dev/" class="text-yellow-200 text-xl uppercase font-bold">Fresh</a>
                </div>
      <p class="">&copy; {new Date().getFullYear()} made by <a href="roni.rocks" class="text-blue-700">Roni</a> </p>
                       
            </footer>
        </div>
    )
    
}