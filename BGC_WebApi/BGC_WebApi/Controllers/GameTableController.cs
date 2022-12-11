using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GameTableController : ControllerBase
{
    private IMapper mapper;
    private GameTableService gameTableService;

    public GameTableController(GameTableService GameTableService, IMapper mapper)
    {
        this.gameTableService = GameTableService;
        this.mapper = mapper;
    }

    /// <summary>
    /// Get ALl GameTables
    /// </summary>
    [HttpGet]

    public IActionResult GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameTableDTO>>(gameTableService.GetAll()));
    }

    /// <summary>
    /// Get GameTable By Id
    /// </summary>
    [HttpGet("Id")]

    public IActionResult GetById(int id)
    {

        return Ok(mapper.Map<GameTableDTO>(gameTableService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameTable
    /// </summary>
    [HttpPost]
    public IActionResult Post([FromBody] GameTableDTO GameTableDTO)
    {
        gameTableService.Insert(mapper.Map<GameTable>(GameTableDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameTable
    /// </summary>
    [HttpPut]
    public IActionResult Put(int id, [FromBody] GameTableDTO GameTableDTO)
    {
        gameTableService.Update(id, mapper.Map<GameTable>(GameTableDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameTable
    /// </summary>
    public void Delete(int id)
    {
        // A GameTable cannot be deleted if versions of the Game are linked
    }
}
