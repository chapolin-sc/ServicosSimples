using Microsoft.AspNetCore.Mvc;

namespace ServicosSimples3.Controllers
{
    public class CronometroController : Controller
    {
        public IActionResult index(){
            ViewData["pagina"] = "cronometro";
            return View();
        }
    }
}