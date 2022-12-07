using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameTableService
{
    bool Delete(int id);
    IEnumerable<GameTable> GetAll();
    GameTable GetById(int id);
    void Insert(GameTable gameTable);
    bool Update(int id, GameTable gameTable);
}