using Microsoft.AspNetCore.Mvc;

namespace ServicosSimples.Controllers
{
    public class CronometroController : Controller
    {
        public IActionResult index(){
            return View();
        }
    }
}