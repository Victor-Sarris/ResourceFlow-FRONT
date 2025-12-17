function Login(){
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-indigo-900">
      <div className="bg-indigo-900 text-white p-6 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">
          Preencha os dados a baixo para fazer login na plataforma.
        </h2>

        <form className="flex flex-col gap-4">
          
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="p-2 text-black"
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col">
            <label className="mb-1">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="p-2 text-black"
            />
          </div>

        </form>
      </div>
    </div>
        </>
    )
}

export default Login;