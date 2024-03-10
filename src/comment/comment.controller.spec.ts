import { Test } from "@nestjs/testing";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { Controller } from "@nestjs/common";

describe("CommentController", () => {
  let commentController: CommentController;
  let commentService: CommentService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [CommentService],
    }).compile();

      commentService = moduleRef.get<CommentService>(CommentService);
      commentController = moduleRef.get<CommentController>(CommentController);

      })
      describe('comment', () => {
        it("return a string", async() => {
          const randomComment: Comment = { "comment" : "Hello"};
          jest.spyOn(commentService, "randomComment").mockResolvedValue(randomComment);
      
          const result = await commentController.getComment();
          expect(typeof result).toBe('string');
        })
      })
      
    }  
  )