import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterResourceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerServicePerimeterResourceArgs {
  perimeter_name: string;
  resource: string;
  timeouts?: GoogleAccessContextManagerServicePerimeterResourceArgsTimeouts;
}

export class google_access_context_manager_service_perimeter_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterResourceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter_resource", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get perimeter_name(): string {
    return `${this.resourceType}.${this.resourceName}.perimeter_name`;
  }

  get resource(): string {
    return `${this.resourceType}.${this.resourceName}.resource`;
  }
}
