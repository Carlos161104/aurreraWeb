import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AwsService {
  private s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.accesKey_bucket,
      secretAccessKey: process.env.secretKey_bucket,
    },
  });

  async uploadFile(file: Express.Multer.File) {
    try {
        const key = file.originalname;
        const Bucket = "nest-aurrera-test";
        const url = `https://${Bucket}.s3.amazonaws.com/${key}`;
        const command = new PutObjectCommand({
          Key: key,
          Body: file.buffer,
          Bucket: Bucket,
        });
        await this.s3.send(command);
        return url;
    } catch (error) {
        return error;
    }
    
  }
}
