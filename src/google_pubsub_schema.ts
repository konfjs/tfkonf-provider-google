import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSchemaArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubSchemaArgs {
  definition?: string;
  name: string;
  type?: string;
  timeouts?: GooglePubsubSchemaArgsTimeouts;
}

export class google_pubsub_schema extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePubsubSchemaArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_schema", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
