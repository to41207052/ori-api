import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';

// createParamDecoratorは、独自のロジックでパラメータを取得する
export const Roles = createParamDecorator(
  // 引数は パラメータ(project-id)を受け取る
  (context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log(`request = ${request}`);

    const projectId = request.query['project-id'];
    if (!projectId) {
      throw new BadRequestException('貴様は不正なアクセスです');
    }
    return projectId;
  },
);
