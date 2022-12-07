using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameTableService : BaseService, IGameTableService
{
    public GameTableService(BGCContext context) : base(context) { }


    public GameTable GetById(int id)
    {
        return BgcContext.GameTables.Find(id);
    }

    public IEnumerable<GameTable> GetAll()
    {
        return BgcContext.GameTables.ToList();
    }

    public void Insert(GameTable gameTable)
    {
        BgcContext.GameTables.Add(gameTable);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, GameTable gameTable)
    {
        GameTable toUpdate = BgcContext.GameTables.Find(id);

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
        GameTable toDelete = BgcContext.GameTables.Find(id);
        if (toDelete != null)
        {
            BgcContext.GameTables.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
