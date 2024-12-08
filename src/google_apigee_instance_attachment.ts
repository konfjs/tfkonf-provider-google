import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeInstanceAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeInstanceAttachmentArgs {
  environment: string;
  instance_id: string;
  timeouts?: GoogleApigeeInstanceAttachmentArgsTimeouts;
}

export class google_apigee_instance_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeInstanceAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_instance_attachment", resourceName);
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
