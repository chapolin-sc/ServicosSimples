using System.Threading.Tasks; 
using System.Collections.Generic;
using ServicosSimples.Models;

namespace ServicosSimples.Service
{
    public interface ICronometroService
    {
         Task<IEnumerable<CronometroItensModel>> GetItemAsync();
    }
}