using Microsoft.AspNetCore.Mvc;

namespace ServicosSimples.Controllers
{
    public class FusosController : Controller
    {
        public IActionResult index(){
            return View();
        }
    }
}