using crud_fullstack.Dto;
using crud_fullstack.Models;
using crud_fullstack.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace crud_fullstack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemInterface _itemInterface;
        public ItemController(IItemInterface itemInterface)
        {
            _itemInterface = itemInterface;
        }

        [HttpGet]
        public async Task<ActionResult<ResponseModel<List<ItemModel>>>> GetAllItems()
        {
            var items = await _itemInterface.GetAllItems();
            return Ok(items);
        }
        
        [HttpPost]
        public async Task<ActionResult<ResponseModel<ItemModel>>> CreateItem(ItemCreateDto itemDto)
        {
            var item = await _itemInterface.CreateItem(itemDto);
            return Ok(item);
        }
        
        [HttpPut]
        public async Task<ActionResult<ResponseModel<ItemModel>>> UpdateItem(ItemUpdateDto itemDto)
        {
            var item = await _itemInterface.UpdateItem(itemDto);
            return Ok(item);
        }
        
        [HttpDelete]
        public async Task<ActionResult<ResponseModel<ItemModel>>> DeleteItem(int id)
        {
            var item = await _itemInterface.DeleteItem(id);
            return Ok(item);
        }
    }
}
