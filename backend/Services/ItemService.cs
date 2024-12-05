using crud_fullstack.Data;
using crud_fullstack.Dto;
using crud_fullstack.Models;
using crud_fullstack.Service;
using Microsoft.EntityFrameworkCore;

namespace crud_fullstack.Services
{
    public class ItemService : IItemInterface
    {
            private readonly AppDbContext _context;

            public ItemService(AppDbContext context)
            {
                _context = context;
            }

        public async Task<ResponseModel<List<ItemModel>>> GetAllItems()
        {
            ResponseModel<List<ItemModel>> response = new ResponseModel<List<ItemModel>>();

            try
            {
                var items = await _context.Items.ToListAsync();

                response.Dados = items;
                response.Mensagem = "Dados obtidos com sucesso!";
                return response;
            }
            catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Status = false;
                return response;
            }
        }

        public async Task<ResponseModel<ItemModel>> CreateItem(ItemCreateDto itemCreateDto)
        {
            ResponseModel<ItemModel> response = new ResponseModel<ItemModel>();

            try
            {
                var newItem = new ItemModel
                {
                    Name = itemCreateDto.Name,
                    Description = itemCreateDto.Description,
                };

                _context.Items.Add(newItem);
                _context.SaveChanges();

                response.Dados = newItem;
                response.Mensagem = "Item criado com sucesso!";
                return response;

            } catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Status |= false;
                return response;
            }
        }

        public async Task<ResponseModel<ItemModel>> UpdateItem(ItemUpdateDto itemUpdateDto)
        {
            ResponseModel<ItemModel> response = new ResponseModel<ItemModel>();

            try
            {
                var item = await _context.Items.FirstOrDefaultAsync(a => a.Id == itemUpdateDto.Id);

                if (item == null)
                {
                    response.Mensagem = "Item não encontrado!";
                    return response;
                }

                item.Name = itemUpdateDto.Name;
                item.Description = itemUpdateDto.Description;

                _context.Items.Update(item);
                _context.SaveChanges();

                response.Dados = item;
                response.Mensagem = "Item alterado com sucesso!";
                return response;

            }catch(Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Status = false;
                return response;
            }
        }

        public async Task<ResponseModel<ItemModel>> DeleteItem(int id)
        {
            ResponseModel<ItemModel> response = new ResponseModel<ItemModel>();

            try
            {
                var item = await _context.Items.FirstOrDefaultAsync(a => a.Id == id);

                if (item == null)
                {
                    response.Mensagem = "Item não encontrado!";
                    return response;
                }

                _context.Items.Remove(item);
                _context.SaveChanges();

                response.Dados = item;
                response.Mensagem = "Item removido com sucesso!";
                return response;

            }
            catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Status = false;
                return response;
            }
        }
    }
}
