using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameVersionService : BaseService, IGameVersionService
{
    public GameVersionService(BGCContext context) : base(context) { }


    public GameVersion GetById(int id)
    {
        return BgcContext.GameVersions.Find(id);
    }

    public IEnumerable<GameVersion> GetAll()
    {
        return BgcContext.GameVersions.ToList();
    }

    public void Insert(GameVersion gameVersion)
    {
        BgcContext.GameVersions.Add(gameVersion);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, GameVersion gameVersion)
    {
        GameVersion toUpdate = BgcContext.GameVersions.Find(id);

        if (toUpdate != null)
        {
            //TO DO

            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        GameVersion toDelete = BgcContext.GameVersions.Find(id);
        if (toDelete != null)
        {
            BgcContext.GameVersions.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
