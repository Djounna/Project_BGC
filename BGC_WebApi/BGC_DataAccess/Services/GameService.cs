using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameService : BaseService
{
    public GameService(BGCContext context) : base(context) { }

    public Game GetById(int id)
    {
        return BgcContext.Games.Find(id);
    }

    public IEnumerable<Game> GetAll()
    {
        return BgcContext.Games.ToList();
    }

    public void Insert(Game game)
    {
        BgcContext.Games.Add(game);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, Game game)
    {
        Game GameToUpdate = BgcContext.Games.Find(id);

        if (GameToUpdate != null)
        {
            GameToUpdate.Description = game.Description;
            GameToUpdate.Name = game.Name;
            GameToUpdate.MaxNumberPlayers = game.MaxNumberPlayers;
            GameToUpdate.MinNumberPlayers = game.MinNumberPlayers;
          
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        Game GameToDelete = BgcContext.Games.Find(id);
        if (GameToDelete != null)
        {
            BgcContext.Games.Remove(GameToDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
