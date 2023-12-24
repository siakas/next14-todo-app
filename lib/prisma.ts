import { PrismaClient } from '@prisma/client'

// グローバル変数として PrismaClient の型を宣言
// これにより、同じ PrismaClient インスタンスをアプリケーション全体で再利用できる
declare global {
  var prisma: PrismaClient
}

// ローカルスコープで PrismaClient の変数を宣言
let prisma: PrismaClient

// 環境変数 'NODE_ENV' が 'production' であるかどうかをチェック
if (process.env.NODE_ENV === 'production') {
  // 本番環境の場合、新しい PrismaClient インスタンスを作成
  prisma = new PrismaClient()
} else {
  // 開発環境の場合、global オブジェクトに、
  // PrismaClient インスタンスが存在しないかどうかをチェック
  if (!global.prisma) {
    // インスタンスが存在しない場合、新しいインスタンスを作成し、
    // global オブジェクトに割り当てる
    global.prisma = new PrismaClient()
  }
  // global オブジェクトから PrismaClient インスタンスを取得
  prisma = global.prisma
}

export default prisma
