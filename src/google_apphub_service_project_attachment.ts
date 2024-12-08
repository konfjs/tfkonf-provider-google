import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApphubServiceProjectAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApphubServiceProjectAttachmentArgs {
  service_project?: string;
  service_project_attachment_id: string;
  timeouts?: GoogleApphubServiceProjectAttachmentArgsTimeouts;
}

export class google_apphub_service_project_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApphubServiceProjectAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apphub_service_project_attachment", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get service_project_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_project_attachment_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
