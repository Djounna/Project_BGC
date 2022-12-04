using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionGameService : BaseService, IGameSessionGameService
{
    public GameSessionGameService(BGCContext context) : base(context) { }

    public GameSessionGame GetById(int id)
    {
        return BgcContext.GameSessionGames.Find(id);
    }

    public IEnumerable<GameSessionGame> GetAll()
    {
        return BgcContext.GameSessionGames.ToList();
    }

    public void Insert(GameSessionGame GameSessionGame)
    {
        BgcContext.GameSessionGames.Add(GameSessionGame);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, GameSessionGame GameSessionGame)
    {
        GameSessionGame toUpdate = BgcContext.GameSessionGames.Find(id);

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
        GameSessionGame toDelete = BgcContext.GameSessionGames.Find(id);
        if (toDelete != null)
        {
            BgcContext.GameSessionGames.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
