using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgSessionGameService : BaseService, IRpgSessionGameService
{
    public RpgSessionGameService(BGCContext context) : base(context) { }

    public RpgSessionGame GetById(int id)
    {
        return BgcContext.RpgSessionGames.Find(id);
    }

    public IEnumerable<RpgSessionGame> GetAll()
    {
        return BgcContext.RpgSessionGames.ToList();
    }

    public void Insert(RpgSessionGame RpgSessionGame)
    {
        BgcContext.RpgSessionGames.Add(RpgSessionGame);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, RpgSessionGame RpgSessionGame)
    {
        RpgSessionGame toUpdate = BgcContext.RpgSessionGames.Find(id);

        if (toUpdate != null)
        {
            // TO DO


            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        RpgSessionGame toDelete = BgcContext.RpgSessionGames.Find(id);
        if (toDelete != null)
        {
            BgcContext.RpgSessionGames.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
