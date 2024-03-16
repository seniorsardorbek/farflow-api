import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
  versionKey: false,
 
  timestamps: {
    createdAt: "created_at",
    updatedAt: false,
  },
})
export class Flow {
  @Prop({
    type: String,
    required: true,
  })
  name: string
  @Prop({
    type: String,
    required: true,
  })
  region: string
  @Prop({
    type: Number,
    required: true,
  })
  day: number
  @Prop({
    type: Number,
    required: true,
  })
  month: number
  @Prop({
    type: Number,
    required: true,
  })
  total: number
  @Prop({ timestamps: true })
  created_at: Date
}
export const FlowSchema = SchemaFactory.createForClass(Flow)
