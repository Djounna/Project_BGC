using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for game tables
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class GameTableController : BaseController
{   
    private IGameTableService gameTableService;

    public GameTableController(IGameTableService GameTableService, IMapper mapper) : base(mapper)
    {
        this.gameTableService = GameTableService;
    }

    /// <summary>
    /// Get All GameTables
    /// </summary>
    [HttpGet]

    public async Task<IActionResult> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<GameTableDTO>>(await gameTableService.GetAll()));
    }

    /// <summary>
    /// Get GameTable By Id
    /// </summary>
    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetById(int id)
    {

        return Ok(mapper.Map<GameTableDTO>(await gameTableService.GetById(id)));
    }

    /// <summary>
    /// Create a new GameTable
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] GameTableDTO GameTableDTO)
    {
        await gameTableService.Insert(mapper.Map<GameTable>(GameTableDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a GameTable
    /// </summary>
    [HttpPut]
    public async Task<IActionResult> Put(int id, [FromBody] GameTableDTO GameTableDTO)
    {
        await gameTableService.Update(id, mapper.Map<GameTable>(GameTableDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a GameTable
    /// </summary>
    [HttpDelete]
    public void Delete(int id)
    {
        //To Do
    }
}
