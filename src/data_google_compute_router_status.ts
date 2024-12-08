import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRouterStatusArgs {
  name: string;
  project?: string;
}

export class data_google_compute_router_status extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeRouterStatusArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_router_status", resourceName);
  }

  get best_routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.best_routes`;
  }

  get best_routes_for_router(): string {
    return `data.${this.resourceType}.${this.resourceName}.best_routes_for_router`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
