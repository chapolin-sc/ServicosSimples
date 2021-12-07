using Microsoft.AspNetCore.Mvc;

namespace ServicosSimples3.Controllers
{
    public class FusosController : Controller
    {
        public IActionResult index(){
            return View();
        }
    }
}