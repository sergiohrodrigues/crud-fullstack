using crud_fullstack.Dto;
using crud_fullstack.Models;

namespace crud_fullstack.Service
{
    public interface IItemInterface
    {
        Task<ResponseModel<List<ItemModel>>> GetAllItems();
        Task<ResponseModel<ItemModel>> GetItemId(int id);
        Task<ResponseModel<ItemModel>> CreateItem(ItemCreateDto itemCreateDto);
        Task<ResponseModel<ItemModel>> UpdateItem(ItemUpdateDto itemUpdateDto);
        Task<ResponseModel<ItemModel>> DeleteItem(int id);
    }
}
