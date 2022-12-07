using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameService
{
    bool Delete(int id);
    IEnumerable<Game> GetAll();
    Game GetById(int id);
    void Insert(Game game);
    bool Update(int id, Game game);
}