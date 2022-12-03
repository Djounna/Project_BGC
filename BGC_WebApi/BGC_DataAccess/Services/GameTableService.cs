using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameTableService : BaseService
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
        GameTable GameTableToUpdate = BgcContext.GameTables.Find(id);

        if (GameTableToUpdate != null)
        {
            // TO DO


            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        GameTable GameTableToDelete = BgcContext.GameTables.Find(id);
        if (GameTableToDelete != null)
        {
            BgcContext.GameTables.Remove(GameTableToDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
