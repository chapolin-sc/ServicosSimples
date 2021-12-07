using System.Threading.Tasks; 
using System.Collections.Generic;
using ServicosSimples3.Models;

namespace ServicosSimples3.Service
{
    public interface ICronometroService
    {
         Task<IEnumerable<CronometroItensModel>> GetItemAsync();
    }
}