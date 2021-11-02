using Microsoft.AspNetCore.Mvc;
using ServicosSimples.Service;
using System.Threading.Tasks;
using ServicosSimples.Models.ViewModels;
using System.Collections.Generic;

namespace ServicosSimples.Controllers
{
    public class CronometroController : Controller
    {

        ICronometroService _cronometro;
        public CronometroController(ICronometroService cronometro){
            _cronometro = cronometro;
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

        public IActionResult index(){
            return View();
        }
    }
}