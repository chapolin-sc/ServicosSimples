using Microsoft.AspNetCore.Mvc;
<<<<<<< HEAD
=======
using ServicosSimples.Service;
using System.Threading.Tasks;
using ServicosSimples.Models.ViewModels;
using System.Collections.Generic;
>>>>>>> 34c38ec00cee6695cb9b55fd7069960950edcf77

namespace ServicosSimples.Controllers
{
    public class CronometroController : Controller
    {
<<<<<<< HEAD
=======

        private ICronometroService _cronometro;

        public CronometroController(ICronometroService cronometro){
            _cronometro = cronometro;
        }

>>>>>>> 34c38ec00cee6695cb9b55fd7069960950edcf77
        public IActionResult index(){
            return View();
        }
    }
<<<<<<< HEAD
}
=======
}

  //Retorna uma lista de cronometros
        /*public async Task<IActionResult> index(){
            
            var listagem = await _cronometro.GetItemAsync();

            var model = new CronometroViewModel();
            {
                model.CronoItens = listagem;
            }
            return View(model);
        }*/
>>>>>>> 34c38ec00cee6695cb9b55fd7069960950edcf77
