using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameVersionService : BaseService
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
        GameVersion GameVersionToUpdate = BgcContext.GameVersions.Find(id);

        if (GameVersionToUpdate != null)
        {
            //TO DO

            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        GameVersion GameVersionToDelete = BgcContext.GameVersions.Find(id);
        if (GameVersionToDelete != null)
        {
            BgcContext.GameVersions.Remove(GameVersionToDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
