using System.Threading.Tasks; 
using System.Collections.Generic;
using ServicosSimples3.Models;

namespace ServicosSimples3.Service
{
    public class CronometroService : ICronometroService
    {
        public Task<IEnumerable<CronometroItensModel>> GetItemAsync(){

            IEnumerable<CronometroItensModel> itens = new[]
            {
                new CronometroItensModel
                {
                    idCronometro = 01,
                    segundos     = "00",
                    minutos      = "00",
                    horas        = "00"      
                }
            };

            return Task.FromResult(itens);
        }
    }
}
    