import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvgroupAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeEnvgroupAttachmentArgs {
  envgroup_id: string;
  environment: string;
  timeouts?: GoogleApigeeEnvgroupAttachmentArgsTimeouts;
}

export class google_apigee_envgroup_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeEnvgroupAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_envgroup_attachment", resourceName);
  }

  get envgroup_id(): string {
    return `${this.resourceType}.${this.resourceName}.envgroup_id`;
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
