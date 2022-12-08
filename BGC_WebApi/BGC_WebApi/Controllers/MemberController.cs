using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Members
/// </summary>
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class MemberController : ControllerBase
{
    private IMapper mapper;
    private MemberService MemberService;

    public MemberController(MemberService MemberService, IMapper mapper)
    {
        this.MemberService = MemberService;
        this.mapper = mapper;
    }

    /// <summary>
    /// Get ALl Members
    /// </summary>
    [HttpGet]

    public IActionResult GetAll()
    {
        return Ok(mapper.Map<IEnumerable<MemberDTO>>(MemberService.GetAll()));
    }

    /// <summary>
    /// Get Member By Id
    /// </summary>
    [HttpGet("Id")]

    public IActionResult GetById(int id)
    {

        return Ok(mapper.Map<MemberDTO>(MemberService.GetById(id)));
    }

    /// <summary>
    /// Create a new Member
    /// </summary>
    [HttpPost]
    public IActionResult Post([FromBody] MemberDTO MemberDTO)
    {
        MemberService.Insert(mapper.Map<Member>(MemberDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a Member
    /// </summary>
    [HttpPut]
    public IActionResult Put(int id, [FromBody] MemberDTO MemberDTO)
    {
        MemberService.Update(id, mapper.Map<Member>(MemberDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a Member
    /// </summary>
    public void Delete(int id)
    {
        // A Member cannot be deleted if versions of the Member are linked
    }
}
