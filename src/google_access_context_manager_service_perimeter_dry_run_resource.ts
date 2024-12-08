import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterDryRunResourceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunResourceArgs {
  perimeter_name: string;
  resource: string;
  timeouts?: GoogleAccessContextManagerServicePerimeterDryRunResourceArgsTimeouts;
}

export class google_access_context_manager_service_perimeter_dry_run_resource extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerServicePerimeterDryRunResourceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter_dry_run_resource", resourceName);
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
